import { categoryType } from "./categoryType"
import { userType } from "./userType"

export type articleType = {
    id: number,
    title: string,
    category: categoryType,
    registerUser: userType,
    registerDate: Date
}