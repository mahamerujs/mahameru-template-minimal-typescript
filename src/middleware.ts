import { MahameruResponse, type MahameruMiddleware, type ProtectedRoute } from 'mahameru';

export const protectedRoutes: ProtectedRoute = [];

const middleware: MahameruMiddleware = async (_container, isProtectedRoute, next) => {
    try {
        if (isProtectedRoute) {
            // Add authentication logic here
            // Then return a MahameruResponse instance if authentication fails

            return MahameruResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        return await next();
    } catch (error) {
        throw error;
    }
};

export default middleware;
