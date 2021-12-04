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

export interface IdeaProps {
    id: number;
    title: string;
    description: string;
    tags: Array<string>
}

export interface IdeaContextProps {
    ideas?: IdeaProps[];
    setIdeas?: (value: IdeaProps) => void;
}

export const IdeaContext = createContext<IdeaContextProps>(
    {} as IdeaContextProps
);

export function IdeaProvider({ children }: IdeaProviderProps) {
    const [ideas, setIdeas] = useState<IdeaProps[]>([]);

    useEffect(() => {
        api.get('/ideas')
            .then((res: AxiosResponse) => {
                console.log(res.data);
                setIdeas(res.data.ideas);
            })
            .catch((error: AxiosError) => {
                if (error.response?.status === 500) return toast.error("Erro interno de servidor!");
                else return toast.error(error.response?.data.message);
            });
    }, [setIdeas]);

    return (
        <IdeaContext.Provider value={{
            ideas
        }}>
            {children}
        </IdeaContext.Provider>
    );
}

export function useIdeas() {
    const context = useContext(IdeaContext);
    return context;
}
