function validator(input){

    const allowedMethods = ["GET", "POST", "DELETE","CONNECT"];
    const allowedVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1","HTTP/2.0" ];

    const regex = /^[A-Za-z1-9.]+$/gm;


        if(!(input.method|| allowedMethods.includes(input.method))){
            throw new Error("Invalid request header: Invalid Method");
        }

        if(!(input.uri || input.uri.match(regex) || "*" || input.uri === "")){
            throw new Error("Invalid request header: Invalid URI");
        }

        if(!(input.version || allowedVersion.includes(input[version]))){
            throw new Error("Invalid request header: Invalid Version");
        }

        if(!(input.message || input.message.includes("<" || ">" || "\\" || "&" || "\"" || "\'") || input.message == "")){
            throw new Error("Invalid request header: Invalid Message");
        }

    console.log(input);
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  
  
 
  validator(test0);
