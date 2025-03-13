import descartes from '$lib/images/descartes.png'
import lostArt from '$lib/images/lost-art-2.png'
import album from '$lib/images/album.png'
import delay from '$lib/images/delay.png'
import why_not_me from '$lib/images/why-not-me.png'

const projects = [
	{
		title: 'descartes',
		description: 'a sequencer implementation for norns',
		slug: 'descartes',
		link: 'https://llllllll.co/t/descartes/58413',
		image: descartes,
		fullDescription: [
			"A sequencer that I built for monome's norns platform. Norns is a small open-source sound computer. Under the hood, it uses the SuperCollider audio engine. Scripts are written in lua. Norns can be connected to a midi controller and can be used with various other hardware developed by monome. This script uses the monome grid as a controller and can be connected with crow, which is a eurorack module that can talk to norns.",
			'While I had made several other scripts for norns prior to descartes, this is the first one that I made public. All of my previous work on the platform was more experimental, half-finished, or for hyper-specific, personal applications. I was very inspired by the response from the community and have appreciated all of the feedback.',
			"The script an implementation of the Rene v2 eurorack module from Make Noise. I've been using Rene for years and have always loved the design. When I sold my Rene a few years ago to make more room in my case, I missed it enough that I set out to build the script in order to be able to use the sequencer's functionality without having to set aside the room in my case. (I've since purchased the Rene again, and sold it, and purchased it again.)",
			"I haven't yet implemented every feature of Rene v2 in the script but the fundamentals are there. I think the biggest advantage of the script over the module is that it can be used with any midi device. While I don't personally use midi much in my own workflow, it seems like that is what others have responded to most. The majority of the folks in the lines thread that ask questions or ask for new features seem to be using it to sequence midi devices the Rene module wouldn't be able to talk to."
		]
	},
	{
		title: 'polyrhythmic timeshift delay',
		description: 'a digital audio effect',
		slug: 'timeshift-delay',
		image: delay,
		fullDescription: [
			'A digital audio effect that I built in Max/MSP. The design is something I had been thinking about for a while and I finally decided to sit down and build. When I was in college, I created an album of sample-based music - musically, it was something akin to vaporwave. One of the techinques that I used on the album to manipulate samples was to import a sample into my DAW, and play the sample back at different speeds simultaneously (timestretched to preserve pitch). This would create a polyrhythmic effect that I really liked. I wanted to create a digital audio effect that would allow me to do this in real time.',
			'The user can set the length of the buffer using a sort of tap-tempo-like function. The wet signal is a timestretched playback of the buffer. Speed of the wet signal is always set as a ratio of the original sample. The user can set the numerator and denominator of the ratio to numbers between 1 and 16. So the playback can be between 1/16 the speed to 16x the speed of the original. There are two "delay" lines which can each have their own timestretch ratio and can be adjusted in volume.',
			'Techincally, the patch uses a digital signal processing algorithm called a phase vocoder which takes a slice of a digital audio signal (that is, a discrete set of samples arranged by time) and converts them to a set of sine wave frequencies and amplitudes. The phase vocoder allows for the manipulation of speed and pitch independent of each other and is the basis of most modern time-stretch and pitch-shifting techniques in digital audio. The patch just takes the phase vocoder and uses it in conjunction with a live audio buffer in order to create the pitch-shifting effect in real time.',
			"I was really happy with the results here. The effect captures something that I really appreciate in electronic instrument design in that it does something simple and fundamental, divorced from any specific application, and yet it can be used to create a wide variety of sounds - whether it's slowing down an incoming signal to extremes to create artifacts, used with drum loops to create interesting polyrhythms, or used as a sort of off-kilter delay.",
			"Currently, the effect can only be controlled with a monome grid input. When I have time to take the project back up, I'd like to make it less tech-specific and get it in a state where it can be used with any midi controller."
		]
	},
	{
		title: 'lost art records',
		description: 'a record label website',
		slug: 'lost-art-records',
		link: 'https://lostartrecords.com',
		image: lostArt,
		fullDescription: [
			"This is a website that I've been building for my father's record business for many years. I started working on the site very early on when I was first learning web development and have seen it through various iterations over time.",
			"It's technically an ecommerce site - it's set up primarily to sell records and merch for the label. But the e-commerce functions of the site are managed through paypal links so the site itself doesn't have to manage a cart or anything. The user-facing side of the site is static, but I am slowly fleshing out a CMS as well.",
			"The tech stack is Next JS, with Payload CMS and Mongo DB. I tried to keep things as simple as possible so the headless CMS, instead of having it's own deployment, is part of the Next JS server. I'm using Vercel for hosting and the site is deployed using serverless functions. It uses incremental static regeneration, so when something is changed in the CMS, an on-demand cache invalidation is triggered, and any relevant static pages are then re-rendered on the server. I really like this architecture for it's simplicity and speed and am excited to see the tools continue to evolve to make these sorts of sites easier to build and more performant with minimal resources."
		]
	},
	{
		title: 'July 1 2023',
		description: 'a collection of generative music',
		slug: 'july-1-2023',
		link: 'https://keenanj.bandcamp.com/album/july-1-2023',
		image: album,
		fullDescription: [
			'This is an album of ambient/experimental music that I recorded in the summer. It was more of a conceptual piece than a collection of music that I worked on for any real period of time.',
			"I had moved into a new house recently and had been noticing that summer that the cicadas were very loud during the day in June and early July. In the evening, they would die down as the sun set and would be replaced by crickets at night. I didn't particularly like the sound of the cicadas since I felt like they were a constant reminder of the heat of the summer. But I did like how distinct the change in soundscape was on a daily schedule. So I was thinking about that aspect, plus trying to appreciate the sound of the cicadas for what it was.",
			`The piece is a generative composition that creates music based on the nature sounds that are recorded in real time. I set up a microphone just outside my backdoor to pick up the sounds of cidasas, crickets, planes passing overhead, dogs barcking, etc. Then I fed the audio feed into my modular synthesizer and set up a patch that would generate music based on the incoming audio. It was important to me that the music generated wasn't just from sampling the incoming audio. Instead I used a range of techniques to make the patch "respond" to the incoming audio without just playing it back. To do this, I used envelope followers, FM synthesis, resonant filter banks, and digital sampling of pitch.`,
			'I originally had wanted to record a 24-hour piece of music that would shift and change with the shifting sonic landscape outside. However, there were some technical limitations that I ran into there, so I opted to take 3 different recordings at certain times of day when soundscape was transitioning or changing and release them as tracks, named with their timestamp.'
		]
	},
	{
		title: 'why not me',
		description: 'a website for a book release',
		slug: 'why-not-me',
		link: 'https://keenanmcdonald.github.io/why-not-me-site/',
		image: why_not_me,
		fullDescription: [
			"This was a website I made for a friend when I had just started out to help sell his father's book. It's made with just HTML, CSS, and JS. No framework. I wanted to make something very simple, yet beautiful, that captured the aesthetic of the book's jacket. I was happy with the result. The live site isn't up anymore but I still have a version deployed on github pages."
		]
	}
]

export default projects
