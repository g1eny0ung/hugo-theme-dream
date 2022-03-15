<script>
    if('serviceWorker' in navigator) {

        /**
         * Define if <link rel='next|prev|prefetch'> should
         * be preloaded when accessing this page
         */
        const PREFETCH = true;

        /**
         * Define which link-rel's should be preloaded if enabled.
         */
        const PREFETCH_LINK_RELS = ['index','next', 'prev', 'prefetch'];

        /**
         * prefetchCache
         */
        function prefetchCache() {
            if(navigator.serviceWorker.controller) {

                let links = document.querySelectorAll(
                    PREFETCH_LINK_RELS.map((rel) => {
                        return 'link[rel='+rel+']';
                    }).join(',')
                );

                if(links.length > 0) {
                    Array.from(links)
                        .map((link) => {
                            let href = link.getAttribute('href');
                            navigator.serviceWorker.controller.postMessage({
                                action : 'cache',
                                url : href,
                            });
                        });
                }


            }
        }

        /**
         * Register Service Worker
         */
        navigator.serviceWorker
            .register('/sw.js', { scope: '/' })
            .then(() => {
                console.log('Service Worker Registered');
            });

        /**
         * Wait if ServiceWorker is ready
         */
        navigator.serviceWorker
            .ready
            .then(() => {
                if(PREFETCH) {
                    prefetchCache();
                }
            });

    }
</script>