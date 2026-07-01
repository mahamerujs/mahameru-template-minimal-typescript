import { ProjectsController } from '@/modules/projects/controller'
import type { RouteHandler } from 'mahameru'

export const GET: RouteHandler = (request, container) => {
    const projectController = container.get(ProjectsController)

    return projectController.getProjects(request)
}

export const POST: RouteHandler = async (request, container) => {
    const projectController = container.get(ProjectsController)

    return await projectController.createProject(request)
}
