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
    tags: string
}

export interface IdeaContextProps {
    listOfIdeas: ListOfIdeasProps[];
    createIdea: (value: IdeaInputProps) => Promise<void>;
    deleteIdea: () => Promise<void>;
    updateIdea: (value: IdeaInputProps) => Promise<void>;
    currentIdea: ListOfIdeasProps;
    setCurrentIdea: (value: ListOfIdeasProps) => void;
    searchIdea: (value: string, filter: boolean) => void;
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
        tags: ''
    });
    const [initialListOfIdeas, setInitialListOfIdeas] = useState<ListOfIdeasProps[]>([]);

    useEffect(() => {
        api.get('/ideas')
            .then((res: AxiosResponse) => {
                console.log(res.data);
                setListOfIdeas(res.data.ideas);
                setInitialListOfIdeas(res.data.ideas)
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
        setInitialListOfIdeas(ideas);
    }

    async function updateIdea(ideaInput: IdeaInputProps) {
        await api.patch(`/ideas/${currentIdea.id}`, ideaInput);
        const getResponse = await api.get(`/ideas`);

        const { ideas } = getResponse.data;

        setListOfIdeas(ideas);
        setInitialListOfIdeas(ideas);
    }

    function searchIdea(searchValue: string, filterOnlyTags: boolean) {
        if (filterOnlyTags) {
            const searchInTags = initialListOfIdeas.filter((idea: ListOfIdeasProps) => (
                idea.tags.toLowerCase().includes(searchValue)
            ));
            return setListOfIdeas(searchInTags);
        } else {
            const searchAll = initialListOfIdeas.filter((idea: ListOfIdeasProps) => (
                idea.title.toLowerCase().includes(searchValue)
                ||
                idea.description.toLowerCase().includes(searchValue)
                ||
                idea.tags.toLowerCase().includes(searchValue)
            ));

            return setListOfIdeas(searchAll);
        }
    }

    return (
        <IdeaContext.Provider value={{
            listOfIdeas,
            createIdea,
            deleteIdea,
            updateIdea,
            currentIdea,
            setCurrentIdea,
            searchIdea
        }}>
            {children}
        </IdeaContext.Provider>
    );
}

export function useIdeas() {
    const context = useContext(IdeaContext);
    return context;
}
