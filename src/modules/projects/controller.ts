import { type MahameruRequest, MahameruResponse } from "mahameru";
import type { Project, ProjectService } from "./service";

export class ProjectsController {
    constructor(private readonly projectService: ProjectService) { }

    getProjects(request: MahameruRequest) {
        const data = this.projectService.getProjects()

        return MahameruResponse.json({
            success: true,
            data
        })
    }

    getProjectById(request: MahameruRequest, id: string) {
        const data = this.projectService.getProjectById(parseInt(id, 10))

        return MahameruResponse.json({
            success: true,
            data
        })
    }

    async createProject(request: MahameruRequest) {
        const project: Project = await request.json()
        const data = this.projectService.addProject(project)

        return MahameruResponse.json({
            success: true,
            data
        })
    }

    deleteProject(request: MahameruRequest, id: string) {
        const data = this.projectService.deleteProject(parseInt(id, 10))

        return MahameruResponse.json({
            success: true,
            data
        })
    }

    async updateProject(request: MahameruRequest, id: string) {
        const project: Project = await request.json()
        const data = this.projectService.updateProject(parseInt(id, 10), project)

        return MahameruResponse.json({
            success: true,
            data
        })
    }
}
