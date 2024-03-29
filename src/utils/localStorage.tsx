import { User } from "../types/user"
export const authenticate = (user: User, next: () => void) => {
    try {
        localStorage.setItem('user', JSON.stringify(user) as string);
        next();
    } catch (error) {
        console.log(error);
    }
}
export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}