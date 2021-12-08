import React from 'react'

export default function SkillDetail({ skillData }) {
    const { name } = skillData;



    return (
        <div>
            {name}
            <hr/>
        </div>
    )
}
