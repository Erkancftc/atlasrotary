import { useEffect, useState } from 'react'

const CartExpirationTimer = () => {
	const [timeLeft, setTimeLeft] = useState(288) // 288 seconds (4 min 48 sec)

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
		}, 1000)

		// Clear the timer when the component unmounts
		return () => clearInterval(timer)
	}, [])

	// Format the time as MM:SS
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
	}

	return (
		<p>
			Your cart will expire in <span id="timer-sell-out">{formatTime(timeLeft)}</span> minutes! Please checkout now before your items sell out!
		</p>
	)
}

export default CartExpirationTimer
