import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "hms10rdf",
    dataset: "production",
})