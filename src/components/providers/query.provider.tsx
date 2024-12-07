
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {FC} from "react";

import {toast} from "@/hooks/use-toast";
import { ChildrenProps, IError } from "@/types";


const onHandleError = (error:Error | IError) => {
if ((error as IError).response?.data?.message) {
return toast({description:(error as IError).response.data.message,variant: 'destructive'});
}
return toast({description:'Something went wrong',variant: 'destructive'});
}

const queryClient = new QueryClient({
    defaultOptions:{
        mutations:{onError:onHandleError}
    }
})
const QueryProvider:FC<ChildrenProps> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;