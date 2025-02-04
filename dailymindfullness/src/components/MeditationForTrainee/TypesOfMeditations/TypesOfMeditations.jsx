import React from 'react'

const TypesOfMeditations = () => {


    const Meditations = [{
        title: 'Медитація як релаксація',
        desc: 'Ляжте і під розслаблену музику зосередьтеся на внутрішніх відчуттях в тілі або на шумі природи. Ви можете візуалізувати, як перебуваєте десь в тихому місці, біля моря, океану чи в лісі. За допомогою цього тіло розслабляється.'
    }, {
        title: 'Медитація на усвідомленість',
        desc: 'Потрібно сісти, розслабитися, зосередитися на тілесних відчуттях. Головна ціль – зосереджуватися доти, доки ми не перестаємо думати про що-небудь, тобто у нас зупиняється потік думок і ми переходимо до відчуттів. Так людина перезавантажується і відпочиває'
    }, {
        title: 'Медитація на досягнення результату',
        desc: 'Наприклад, людині потрібно виступити, а вона цього боїться.Щоб перебороти страх, їй потрібно сісти у зручну позу, заплющити очі, розслабитися і уявити, що вона виходить на сцену, починає говорити промову. Потрібно побути всередині себе, відчути страх і тривогу перед виступом, а потім запитати: \"Де я можу знайти в собі силу це подолати?\". Так людина виходить зі свого негативного страху і у неї росте позитивна енергія'
    }]

    return (
        <div className='my-[30px]'>
            <h1 className='text-[32px] font-semibold mb-[20px]'>Види медитації</h1>
            <div className='flex flex-row gap-[20px]'>
                {Meditations.map((meditation, index) => (
                    <div key={index} className='w-[420px] h-[521px] p-[20px] rounded-[10px] bg-[#D6EEFF] flex flex-col gap-[20px]'>
                        <h1 className='text-[24px] font-semibold'>{meditation.title}</h1>
                        <p className='text-[20px] leading-[24.38px]'>{meditation.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypesOfMeditations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          import React from 'react'

const TypesOfMeditations = () => {


    const Meditations = [{
        title: 'Медитація як релаксація',
        desc: 'Ляжте і під розслаблену музику зосередьтеся на внутрішніх відчуттях в тілі або на шумі природи. Ви можете візуалізувати, як перебуваєте десь в тихому місці, біля моря, океану чи в лісі. За допомогою цього тіло розслабляється.'
    }, {
        title: 'Медитація на усвідомленість',
        desc: 'Потрібно сісти, розслабитися, зосередитися на тілесних відчуттях. Головна ціль – зосереджуватися доти, доки ми не перестаємо думати про що-небудь, тобто у нас зупиняється потік думок і ми переходимо до відчуттів. Так людина перезавантажується і відпочиває'
    }, {
        title: 'Медитація на досягнення результату',
        desc: 'Наприклад, людині потрібно виступити, а вона цього боїться.Щоб перебороти страх, їй потрібно сісти у зручну позу, заплющити очі, розслабитися і уявити, що вона виходить на сцену, починає говорити промову. Потрібно побути всередині себе, відчути страх і тривогу перед виступом, а потім запитати: \"Де я можу знайти в собі силу це подолати?\". Так людина виходить зі свого негативного страху і у неї росте позитивна енергія'
    }]

    return (
        <div className='my-[30px]'>
            <h1 className='text-[32px] font-semibold mb-[20px]'>Види медитації</h1>
            <div className='flex flex-row gap-[20px]'>
                {Meditations.map((meditation, index) => (
                    <div key={index} className='w-[420px] h-[521px] p-[20px] rounded-[10px] bg-[#D6EEFF] flex flex-col gap-[20px]'>
                        <h1 className='text-[24px] font-semibold'>{meditation.title}</h1>
                        <p className='text-[20px] leading-[24.38px]'>{meditation.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypesOfMeditations