import React from 'react'
import SkillDetail from "./SkillDetail"

export default function SkillContainer({skills}) {

    const skillDeets = skills?.map(skillObj => <SkillDetail key={skillObj.id} skillData={skillObj} />)


    return (
        <div>
            <ul className="cards">{skillDeets}</ul>
        </div>
    )
}
