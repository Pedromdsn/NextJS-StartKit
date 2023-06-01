"use client"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useEffect } from "react"

const darkModeAtom = atomWithStorage("darkMode", true)

export const useTheme = () => {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom)
	return { darkMode, setDarkMode }
}

export const ThemeProvider = ({ children }: WithChildren) => {
	const { darkMode, setDarkMode } = useTheme()

	useEffect(() => {
		const darkInWindow = window.matchMedia("(prefers-color-scheme: dark)").matches
		setDarkMode(() => darkInWindow)
	}, [])

	return <div className={darkMode ? "dark" : ""}>{children}</div>
}
