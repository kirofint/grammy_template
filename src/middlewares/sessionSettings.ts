import { Context } from 'grammy'

export default (ctx: Context, next: () => void) => {
  // toggles, boolean, statics
	ctx.session ||= {
		states: {
			buttonClicksCounter: 0,
			buttonClicksCounterTimeout: null,
		},
	}

  return next()
}
