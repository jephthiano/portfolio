import { useQuery } from '@tanstack/react-query';
import { getImage, getSocialHandle, getSkill, getProject} from 'addons/query/api';


//for image
export const useImage = () => {
    return useQuery({ queryKey: ['image'], queryFn: getImage, retry: false, });
}

//for social handle 
export const useSocialHandle = () => {
    return useQuery({ queryKey: ['socialHandle'], queryFn: getSocialHandle, retry: false, });
}

//for skill 
export const useSkill = () => {
    return useQuery({ queryKey: ['skill'], queryFn: getSkill, retry: false, });
}

//for Project
export const useProject = () => {
    return useQuery({ queryKey: ['project'], queryFn: getProject, retry: false, });
}