import React from 'react'
import { connect } from 'react-redux'

const TechSelectOptions = ({ tech: { techs, loading } }) => {
    

    return (
        !loading && techs !== undefined && techs.map((t) => <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
        </option>)
    )
}

const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps)(TechSelectOptions)