import { useQuery } from '@tanstack/react-query';
import { getNeededData, getImage, getSocialHandle, getSkill, getProject} from 'addons/query/api';
import { initialNeededData } from 'addons/global_variable.inc';


//for needed data
export const useNeededData = () => {
    return useQuery(
        { queryKey: ['neededData'], 
            queryFn: getNeededData, 
            initialData: initialNeededData,
            retry: false, 
        }
    );
}