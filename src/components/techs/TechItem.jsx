import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../actions/TechActions.js'

const TechItem = ({ tech, deleteTech }) => {

    const handleDelete = (id) => {
        console.log('deleting ', id)
        deleteTech(id)
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={() => handleDelete(tech.id)}>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem)
