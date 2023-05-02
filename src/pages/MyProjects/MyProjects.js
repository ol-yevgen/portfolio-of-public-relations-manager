import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { useChangeLanguage } from '../../hooks/useChangeLanguage';

import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

const MyProjects = () => {
    const uaProjects = (state) => state.projects.projectsUa;
    const enProjects = (state) => state.projects.projectsEn;

    const projects = useChangeLanguage(uaProjects, enProjects);

    const filteredProjectsSelector = createSelector(
        (state) => state.filters.activeFilter,
        projects,
        (filter, projects) => {
            if (filter === 'all') {

                return projects;
            } else {
                return projects.filter(item => item.filter === filter)
            }
        }
    )
    
    const filteredProjects = useSelector(filteredProjectsSelector);

    const renderProjectsList = (arr) => {
        if (arr.length === 0) {
            return <h4 className="discription__title">No projects</h4>
        }

        return arr.map(({ id, ...props }) => {
            return <ProjectsList key={id} {...props}/>
        })
    }

    const elements = renderProjectsList(filteredProjects)

    const title = useChangeLanguage('Портфоліо', 'Portfolio');

    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="title">{title}</h2>
                <ProjectsFilter />
                {elements}
            </div>
        </section>
    )
}

export default MyProjects