export type Project = {
    id: number;
    name: string;
}

export class ProjectService {
    projects: Project[] = [];

    constructor() { }

    getProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: number): Project | undefined {
        const project = this.projects.find(project => project.id === id);

        if (!project)
            throw new Error(`Project with id ${id} not found`);

        return project;
    }

    getProjectByName(name: string): Project | undefined {
        const project = this.projects.find(project => project.name === name);

        if (!project)
            throw new Error(`Project with name ${name} not found`);

        return project;
    }

    existsProjectByName(name: string): boolean {
        return this.projects.some(project => project.name === name);
    }

    addProject(project: Project) {
        if (this.existsProjectByName(project.name))
            throw new Error('Project already exists');

        const latestId = this.projects.length > 0 ? this.projects[this.projects.length - 1].id : 0;

        project.id = latestId + 1;

        this.projects.push(project);

        return project;
    }

    deleteProject(id: number) {
        if (!this.getProjectById(id))
            throw new Error(`Project with id ${id} not found`);

        this.projects = this.projects.filter(project => project.id !== id);
    }

    updateProject(id: number, project: Project) {
        if (!this.getProjectById(id))
            throw new Error(`Project with id ${id} not found`);

        const index = this.projects.findIndex(p => p.id === id);

        if (index !== -1) {
            this.projects[index] = {
                ...this.projects[index],
                ...project,
                id: this.projects[index].id
            };
        }

        return project;
    }
}
