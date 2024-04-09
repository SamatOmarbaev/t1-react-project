import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { RoutePath } from "./routes"
import { Loader } from "@/components/atoms/Loader"
import { AdminPage } from "@/components/pages/AdminPage"
import { HomePage } from "@/components/pages/HomePage"
import { NotFoundPage } from "@/components/pages/NotFoundPage"
import { PageDetails } from "@/components/pages/PageDetails"

export const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={RoutePath.HOME} element={<HomePage />} />
                <Route path={RoutePath.ADMIN} element={<AdminPage />} />
                <Route path={RoutePath.PRODUCT} element={<PageDetails />} />
                <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}
