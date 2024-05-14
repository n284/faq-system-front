import { categoryType } from "./categoryType"
import { userType } from "./userType"

export type articleType = {
    articleId: string,
    title: string,
    category: categoryType,
    content: string,
    registerUser: userType,
    registerDate: string,
    updateUser: userType,
    updateDate: string
}