import path from 'path';

export default class Router {
    constructor (config) {
        let app = config.app;

        console.log ('Setting up router')

        app.route ('/')
            .get ( async (req, res) => {
                let query = req.query

                console.log ('Form query data:', query);

                res.sendFile (path.resolve (__dirname, 'browser/pages/index.html'));
            })
        app.route ('/postits')
            .get ( async (req, res) => {
                res.sendFile (path.resolve (__dirname, 'browser/pages/post-form.html'));
            })

        app.route ('/handle-post')
            .post ( async (req, res) => {
                let param = req.body

                console.log ('POST form data:', param)

                res.redirect ('/postpost');
            })

        app.route ('/postpost')
            .get ( async (req, res) => {

                res.sendFile (path.resolve (__dirname, 'browser/pages/congrats.html'));
            })
    }

}
