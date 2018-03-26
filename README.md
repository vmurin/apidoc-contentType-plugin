# apidoc-plugin-contenttype
Add different content types support to apidoc

## Usage:

This fork of the original repo uses the apidoc plugin name convention to be found automatically without need to use additional parameters.

### Install

```bash
npm install vmurin/apidoc-plugin-contenttype
```
You have to use the template provided and the custome parser, add `-t apidoc-contentType-plugin/template/`
to your command line.

Run this command from the directory of your project.
```
apidoc -i lib/ -o doc -t node_modules/apidoc-plugin-contenttype/template/
```
Then, you can use the `@apiContentType` tag in your doc.
```
/**
 * @apiParam {String} [id] Beer ID.
 * @apiParam {String} [name] Beer name.
 * @apiGroup Beer
 * @apiVersion 0.1.0
 * @api {post} /beerJSON Get a list of beers
 * @apiContentType application/json
 */
```
