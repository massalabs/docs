---
id: guidelines
title: RPC Providers
---
# Module creation guidelines

One of the advantages of Massa Station is that plugins can be developed in any programming language. But in order for modules to work on the Massa Station, they must first respect a certain number of guidelines. 


## Tech Stack 


You can developp a plugin in any wanted language. The easiest way is to use go with the the [plugin hello-world]([http://](https://github.com/massalabs/station-massa-hello-world)) hook to register the plugin.

### Develop a plugin in go

To do so once you created a new plugin, you can add the following code to your main.go file  to register the plugin to the Massa Station:

```go
	listener, err := server.HTTPListener()
	if err != nil {
		panic(err)
	}

	plugin.RegisterPlugin(listener)
```

### Develop a plugin in any other language

respect the following guidelines :
Your plugin will need to  call **the Register Endpoint**: The plugin should be able to call the `register` endpoint in Massastation. Use the following details for the endpoint:

- **Endpoint:** `/plugin-manager/register`
- **Method:** POST
- **Description:** Register a plugin. Used by plugins to register themselves to the plugin manager.
- **Operation ID:** `pluginManagerRegister`
- **Parameters:**
  - `body` (Request Body, required): The request body containing the following properties:
    - `id` (string, required): Plugin identifier.
    - `url` (string, required): URL authority to use for connecting to the plugin.

## Artifacts requirements
To be compatible with Massa Station, the plugin artifact must contain the following files :
### Logo
There must be a plugin logo in the artifact
### Module manifest

To work with Massa Station, the module **must** have a manifest.json that has the following structure : 

```json
{
    "author" : "Massa Labs",
    "name" : "hello-world",
    "description" : "hello world plugin",
    "logo" : "hello_world.svg",
    "home" : "",
    "version" : "0.0.6",
    "apispec":""
}
```

Manifest.json properties : 

| Fields | Description | Format | Specifications |
| --- | --- | --- | --- |
| Author | Module author name | text | 30 characters max |
| Name | Module name | text | 30 characters max |
| Description | Module short description text | text | 80 characters max |
| Logo | Module logo file name  | text | 40px x 40px max |
| Home | URL to module home page | URL | N/A |
| Version | Module version | XX.XX.XX | N/A |
| APIspec | api specifications | text | N/A |

