namespace $.$$ {
	export class $doshik_client extends $.$doshik_client {

		change_zen_mod() {
			console.log('Zen mode')
		}

		add_today_steps() {
			if (this.add_doshik() > 0) this.doshik(this.doshik() + this.add_doshik())
		}

		all_doshik_label() {
			return `Всего активных шагов: ${this.doshik()}`
		}
	}
}
