import { ProjectsController } from "@/modules/projects/controller"
import type { RouteHandler } from "mahameru"

export const GET: RouteHandler = (request, container, { params }) => {
    const projectController = container.get(ProjectsController)

    return projectController.getProjectById(request, params.id)
}

export const PATCH: RouteHandler = async (request, container, { params }) => {
    const projectController = container.get(ProjectsController)

    return await projectController.updateProject(request, params.id)
}

export const PUT: RouteHandler = async (request, container, { params }) => {
    const projectController = container.get(ProjectsController)

    return await projectController.updateProject(request, params.id)
}

export const DELETE: RouteHandler = (request, container, { params }) => {
    const projectController = container.get(ProjectsController)

    return projectController.deleteProject(request, params.id)
}
