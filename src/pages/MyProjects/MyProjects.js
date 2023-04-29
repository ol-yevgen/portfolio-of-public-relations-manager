import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import ProjectsFilter from '../../components/ProjectsFilter/ProjectsFilter';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import './myProjects.scss';

const MyProjects = () => {

    const filteredProjectsSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.projects.projects,
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

    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="title">Portfolio</h2>
                <ProjectsFilter />
                {elements}
            </div>
        </section>
    )
}

export default MyProjects