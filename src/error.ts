import { type MahameruErrorHandler, MahameruResponse } from "mahameru";

const errorHandler: MahameruErrorHandler = async ({ error }) => {
    if (error instanceof Error)
        return MahameruResponse.json({
            success: false,
            message: error.message
        }, { status: 400 });

    console.error(error);

    return MahameruResponse.json({
        success: false,
        error: 'Internal Server Error'
    }, { status: 500 });
}

export default errorHandler
