import { Route, Routes } from "react-router-dom";
import { Login } from "../features/login/login";
import { NOT_FOUND } from "../constants/statusCode";
import { Error } from "../features/error/error";
import { FAQList } from "../features/faq_list/faqList";

export function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/faq-list" element={<FAQList />} />
            <Route path="*" element={<Error errorCode={NOT_FOUND} isLogin={true} />} />
        </Routes>
    );
}