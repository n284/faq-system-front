import { categoryType } from "./categoryType"
import { userType } from "./userType"

export type articleType = {
    id: string,
    title: string,
    category: categoryType,
    content: string,
    registerUser: userType,
    registerDate: string
}