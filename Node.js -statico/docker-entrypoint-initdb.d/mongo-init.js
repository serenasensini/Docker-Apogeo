db.createUser({
    user: 'root',
    pwd: 'toor',
    roles: [
        {
            role: 'readWrite',
            db: 'mydatabase',
        },
    ],
});

db = new Mongo().getDB("mydatabase");

db.createCollection('components', { capped: false });

db.components.insert([
        {
            "name": "Application1",
            "description": "Lorem ipsum",
            "available_sizing": [
                {
                    "name": "small",
                    "label": "S",
                    "mCPU": 2000,
                    "u_mCPU": "millicores",
                    "RAM": 8,
                    "u_RAM": "GB"
                },
                {
                    "name": "medium",
                    "label": "M",
                    "mCPU": 4000,
                    "u_mCPU": "millicores",
                    "RAM": 16,
                    "u_RAM": "GB"
                },
                {
                    "name": "large",
                    "label": "L",
                    "mCPU": 8000,
                    "u_mCPU": "millicores",
                    "RAM": 32,
                    "u_RAM": "GB"
                }
            ]
        },
        {
            "name": "Application2",
            "description": "Lorem ipsum",
            "available_sizing": [
                {
                    "name": "small",
                    "label": "S",
                    "mCPU": 2000,
                    "u_mCPU": "millicores",
                    "RAM": 8,
                    "u_RAM": "GB"
                }
            ]
        },
        {
            "name": "Application3",
            "description": "Lorem ipsum",
            "available_sizing": [
                {
                    "name": "small",
                    "label": "S",
                    "mCPU": 2000,
                    "u_mCPU": "millicores",
                    "RAM": 8,
                    "u_RAM": "GB"
                },
                {
                    "name": "large",
                    "label": "L",
                    "mCPU": 8000,
                    "u_mCPU": "millicores",
                    "RAM": 32,
                    "u_RAM": "GB"
                }
            ]
        },
        {
            "name": "Application4",
            "description": "Lorem ipsum",
            "available_sizing": [
                {
                    "name": "medium",
                    "label": "M",
                    "mCPU": 4000,
                    "u_mCPU": "millicores",
                    "RAM": 16,
                    "u_RAM": "GB"
                },
                {
                    "name": "large",
                    "label": "L",
                    "mCPU": 8000,
                    "u_mCPU": "millicores",
                    "RAM": 32,
                    "u_RAM": "GB"
                }
            ]
        }
    ]
);

db.createCollection('sizings', { capped: false });

db.sizings.insert([
        {
            "name": "small",
            "label": "S",
            "mCPU": 4000,
            "u_mCPU": "millicores",
            "RAM": 16,
            "u_RAM": "GB"
        },
        {
            "name": "medium",
            "label": "M",
            "mCPU": 8000,
            "u_mCPU": "millicores",
            "RAM": 32,
            "u_RAM": "GB"
        },
        {
            "name": "large",
            "label": "L",
            "mCPU": "16000",
            "u_mCPU": "millicores",
            "RAM": "64",
            "u_RAM": "GB"
        }
    ]
);
