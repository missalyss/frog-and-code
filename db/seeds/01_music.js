
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          id: 1,
          title: 'All Melody',
          artist: 'Nils Frahm',
          usp: 4050486114407,
          label: 'Erased Tapes Records Ltd.',
          year: 2018,
          hardware_type: 'vinyl',
          description: 'All Melody is an ambitious ambient-electro-acoustic creation that will still sound vital 10 years from now. It\'s also a sublime starting point for those unfamiliar with this multifaceted musician. With his new creative "kitchen" in place, we can only wonder what delights Frahm might deliver next from Saal 3.',
          img_url: 'https://etr-media.s3-eu-west-1.amazonaws.com/925/cover.jpg'
        },
        {
          id: 2,
          title: 'Forth Wanderers',
          artist: 'Forth Wanderers',
          usp: 098787122244,
          label: 'SUBPOP',
          year: 1991,
          hardware_type: 'casette',
          description: 'Forth Wanderers employ a tin-can-telephone style of composition which they use even when living in the same area code. Since first collaborating in 2013 as Montclair, New Jersey high schoolers, guitarist and songwriter Ben Guterl and vocalist Ava Trilling have passed songs back and forth like pen pals. Guterl will devise an instrumental skeleton before sending it to vocalist Ava Trilling who pens the lyrics based off the melody. The duo then gather alongside guitarist Duke Greene, bassist Noah Schifrin, and drummer Zach Lorelli to expand upon the demo. It’s a patient and practiced writing system that has carried the quintet through two EPs (2013’s Mahogany and 2016’s Slop) and one LP (2014’s Tough Love). Forth Wanderers, the group’s sophomore record and Sub Pop debut, is the group\'s most comprehensive and assured statement yet. ',
          img_url: 'https://f4.bcbits.com/img/a2860216737_16.jpg'
        },
        {
          id: 3,
          title: 'Mona Bone Jakon',
          artist: 'Cat Stevens',
          usp: 123456789,
          label: 'A&M Records',
          year: 1991,
          hardware_type: 'vinyl',
          description: 'it\'s a really great title ya know?',
          img_url: 'image.jpg'
        }
      ]);
    }).then(function () {
      return knex.raw(
        "SELECT setval('music_id_seq', (SELECT MAX (id) FROM music))"
      )
    }).catch(function (error) {
      console.error('Red Alert! ', error)
    })
}
