namespace $.$$ {
	export class $doshik_client extends $.$doshik_client {

		change_zen_mod() {
			this.zen(!this.zen())
		}

		sub(): readonly any[] {
			return [this.zen() ? this.Zen() : this.Full()]
		}

	}
}
