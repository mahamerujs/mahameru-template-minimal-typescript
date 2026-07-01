import { RouteHandler, MahameruResponse } from 'mahameru'

export const GET: RouteHandler = () => {
    return MahameruResponse.json({
        success: true,
        message: 'Welcome to MahameruJS!'
    })
}
