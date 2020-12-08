import * as ackeeTracker from 'ackee-tracker'

let trackerInstance = false

export default async function(context, inject) {
  // plugin is called only once when laoding the app on client-side
  const ackee = ackeeTracker.create(
    {
      server: 'https://ackee.nuxtjs.com',
      domainId: '6336379b-8d3e-4069-9d2e-897be6a7ed4e',
    },
    {
      ignoreLocalhost: true,
      detailed: false,
    }
  )

  inject('ackee', ackee)

  context.app.router.afterEach((to, from) => {
    ackee.record()
  })
}
