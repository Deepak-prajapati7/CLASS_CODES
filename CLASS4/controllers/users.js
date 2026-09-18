import fs from 'fs';

function getdata() {
    let data = fs.readFileSync('./database/data.json', 'utf8');
    console.log(data);

    data = JSON.parse(data);

    return data;
}

const createuser = function (req, res) {
    let {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(404).json({
            success: false,
            message: "Please provide name, email and password"
        });
    }

    let data = getdata();
    data.push({name, email, password});

    fs.writeFileSync('./database/data.json', JSON.stringify(data),null, 3);
    
    res.status(200).json({
        message: "User created successfully",
        data: {name, email, password}
    });


}

const getusers = function (req, res) {
    let data = getdata();

    res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: data
    });
};

const updateuser = function (req, res) {


    console.log('object')
    let {name , age} = req.body;
    let id = req.params.id;
    let data = getdata();
    let user = data.find(user => user.id === Number(id));
    let index =data.indexOf(user);
    if(!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    data[index] = {...user, name, age};
    fs.writeFileSync('./database/data.json', JSON.stringify(data),null, 3);

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: data[index]
    });
}

const deleteuser = function (req, res) {
    let id = req.params.id;
    let data = getdata();
    let user = data.find(user => user.id === Number(id));
    let index = data.indexOf(user);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    data.splice(index, 1);
    fs.writeFileSync('./database/data.json', JSON.stringify(data),null, 3);
    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: data
    });

}   

const getUserById = function (req, res) {
    const id = req.params.id;
    const data = getdata();
    const user = data.find(user => user.id === Number(id));
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: user
    });
};

export { getusers ,createuser, updateuser, deleteuser, getUserById};