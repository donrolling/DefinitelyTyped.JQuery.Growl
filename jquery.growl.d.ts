interface growlOptions {
	//Message
	message: string;
	//Title
	title?: string;
	//URL
	url?: string;
	//while hovering over the alert, prevent it from being dismissed (true | false - default: true)
	delayOnHover?: boolean;
	//the duration (in milliseconds) for which the alert is displayed (default: 3200)
	duration?: number;
	//whether the alert should be fixed rather than auto- dismissed(true | false - default: false)
	fixed?: boolean;
	//the alert's position ('tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' - default: 'tr')
	location?: string;
	//the alert's size ('small' | 'medium' | 'large' - default: 'medium')
	size?: string;
	//the alert's style ('default' | 'error' | 'notice' | 'warning' - default: 'default')
	style?: string;
}

interface growl {
	error(options: growlOptions): void;
	notice(options: growlOptions): void;
	warning(options: growlOptions): void;
}

interface JQueryStatic {
	growl: growl;
}
