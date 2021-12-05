import { AxiosError, AxiosResponse } from "axios";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IdeaProviderProps {
    children: ReactNode;
}

export interface ListOfIdeasProps {
    id: number;
    title: string;
    description: string;
    tags: Array<string>
}

export interface IdeaContextProps {
    listOfIdeas: ListOfIdeasProps[];
    createIdea: (value: IdeaInputProps) => Promise<void>;
    deleteIdea: () => Promise<void>;
    updateIdea: (value: IdeaInputProps) => Promise<void>;
    currentIdea: ListOfIdeasProps;
    setCurrentIdea: (value: ListOfIdeasProps) => void;
}

type IdeaInputProps = Omit<ListOfIdeasProps, 'id'>

export const IdeaContext = createContext<IdeaContextProps>(
    {} as IdeaContextProps
);

export function IdeaProvider({ children }: IdeaProviderProps) {
    const [listOfIdeas, setListOfIdeas] = useState<ListOfIdeasProps[]>([]);
    const [currentIdea, setCurrentIdea] = useState<ListOfIdeasProps>({
        id: 0,
        title: '',
        description: '',
        tags: []
    });

    useEffect(() => {
        api.get('/ideas')
            .then((res: AxiosResponse) => {
                console.log(res.data);
                setListOfIdeas(res.data.ideas);
            })
            .catch((error: AxiosError) => {
                if (error.response?.status === 500) return toast.error("Erro interno de servidor!");
                else return toast.error(error.response?.data.message);
            });
    }, [setListOfIdeas]);

    async function createIdea(ideaInput: IdeaInputProps) {
        const response = await api.post(`/ideas`, ideaInput);
        const { ideas } = response.data;

        setListOfIdeas([
            ...listOfIdeas,
            ideas
        ])
    }

    async function deleteIdea() {
        await api.delete(`/ideas/${currentIdea.id}`);
        const getResponse = await api.get(`/ideas`);

        const { ideas } = getResponse.data;

        setListOfIdeas(ideas);
    }

    async function updateIdea(ideaInput: IdeaInputProps) {
        await api.patch(`/ideas/${currentIdea.id}`, ideaInput);
        const getResponse = await api.get(`/ideas`);

        const { ideas } = getResponse.data;

        setListOfIdeas(ideas);
    }

    return (
        <IdeaContext.Provider value={{
            listOfIdeas,
            createIdea,
            deleteIdea,
            updateIdea,
            currentIdea,
            setCurrentIdea
        }}>
            {children}
        </IdeaContext.Provider>
    );
}

export function useIdeas() {
    const context = useContext(IdeaContext);
    return context;
}
