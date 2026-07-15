import type { MahameruMiddleware, ProtectedRoute } from 'mahameru';

export const protectedRoutes: ProtectedRoute = [];

const middleware: MahameruMiddleware = async (_container, _isProtectedRoute, next) => {
    try {
        return await next();
    } catch (error) {
        throw error;
    }
};

export default middleware;
