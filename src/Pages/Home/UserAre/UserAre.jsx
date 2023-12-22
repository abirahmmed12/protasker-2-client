const UserTypesComponent = () => {
    const userTypes = [
        {
            id: 1,
            type: "Developers",
            benefits: ["Access to coding resources", "Networking with other developers", "Tech updates"],
        },
        {
            id: 2,
            type: "Corporate Professionals",
            benefits: ["Professional networking", "Industry insights", "Skill development"],
        },
        {
            id: 3,
            type: "Bankers",
            benefits: ["Financial news and updates", "Networking with finance professionals", "Training programs"],
        },
        // Add more user types as needed
    ];

    return (
        <div className="container mx-auto mt-8 mb-5 text-white">
            <h2 className="text-3xl font-semibold mb-4">Who Can Benefit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userTypes.map((userType) => (
                    <div key={userType.id} className="bg-blue-500 p-4 rounded-md border-2 border-white">
                        <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
                        <ul className="text-white">
                            {userType.benefits.map((benefit, index) => (
                                <li key={index} className="mb-2">
                                    <svg
                                        className="w-4 h-4 inline-block mr-2 fill-current text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="12" r="8" />
                                        <path d="M9 11.5v-6a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zM12 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </svg>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTypesComponent;
