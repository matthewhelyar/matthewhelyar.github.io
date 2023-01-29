
class ProductsForm {
	constructor(componentSelect, sizeSelect, irrCheckbox, productSelect) {
		this.componentSelect = componentSelect;
		this.sizeSelect = sizeSelect;
		this.irrCheckbox = irrCheckbox;
		this.productSelect = productSelect;

		this.categoryList = [
			'Red Cells',
			'Red Cells - LVT',
			'Red Cells - IUT',
			'Red Cells - Neonatal Exchange',
			'Red Cells - Washed',
			'Red Cells - Frozen',
			'Red Cells - Autologous',
			'Platelets',
			'Platelets - Washed',
			'Platelets - IUT',
			'Fresh Frozen Plasma',
			'Cryoprecipitate',
			'Granulocytes'
		];

		this.componentSelect.addEventListener('change', this.componentSelectChanged.bind(this));
		this.sizeSelect.addEventListener('change', this.sizeSelectChanged.bind(this));
		this.irrCheckbox.addEventListener('change', this.irrCheckboxChanged.bind(this));
		this.productSelect.addEventListener('change', this.productSelectChanged.bind(this));

		//this.generateCategories();

		this.filterSizeSelect();
		this.filterIrrCheckbox();
		this.filterProductSelect();
	}

	//generateCategories() {
	//	this.componentSelect.length = 0;

	//	let categoryList = [];
	//	for (let p of products) {
	//		if (!p.category) continue;
	//		let categoryExists = false;
	//		for (let c of categoryList) {
	//			if (c == p.category) {
	//				categoryExists = true;
	//				break;
	//			}
	//		}
	//		if (!categoryExists)
	//			categoryList.push(p.category);
	//	}
	//	for (let c of categoryList.sort())
	//		this.componentSelect.add(new Option(c), undefined);
	//}

	filterProductSelect() {
		// store currently selected product code:
		const currentlySelectedProduct = this.productSelect.value;

		// clear options from this.productSelect
		while (this.productSelect.length > 0) {
			this.productSelect.remove(0);
		}

		// filter products as per form
		const filteredProducts = products.filter(x => {
			return x.category === this.componentSelect.value &&
				x.irr === this.irrCheckbox.checked &&
				x.size === this.sizeSelect.value;
		});

		// add options to this.productSelect
		for (const p of filteredProducts) {
			let text = (p.pack > 0) ? p.text + " (" + p.pack + ")" : p.text;
			this.productSelect.add(new Option(text, p.code), undefined);
		}

		// if new list contains same product, select it, otherwise generate new label.
		const selectedIndex = filteredProducts.findIndex(x => { return x.code === currentlySelectedProduct; });
		if (selectedIndex != -1)
			this.productSelect.value = currentlySelectedProduct;
		else
			this.productSelectChanged();
	}

	componentSelectChanged() {
		this.filterSizeSelect();
		this.filterIrrCheckbox();
		this.filterProductSelect();
	}

	sizeSelectChanged() {
		this.filterComponentSelect();
		this.filterIrrCheckbox();
		this.filterProductSelect();
	}

	irrCheckboxChanged() {
		this.filterComponentSelect();
		this.filterSizeSelect();
		this.filterProductSelect();
	}

	filterComponentSelect() {
		// don't filter for now
		return;

		//// filter products based on other 2,
		//const filteredProducts = products.filter(x => {
		//	return x.irr === this.irrCheckbox.checked && x.size === this.sizeSelect.value;
		//});

		//// filter down select based on that.
		//const filteredCategories = this.categoryList.filter(c => filteredProducts.some(p => p.category === c));

		//// disable some options
		//for (let o of this.componentSelect.options) {
		//	o.disabled = !filteredCategories.includes(o.value);
		//}
	}

	filterSizeSelect() {
		const filteredProducts = products.filter(x => { return x.category === this.componentSelect.value; });
		const someAdult = filteredProducts.some(p => p.size === 'Adult');
		const someNeo = filteredProducts.some(p => p.size === 'Neonatal');
		this.sizeSelect.disabled = !(someAdult && someNeo);
		if (someAdult && !someNeo) this.sizeSelect.value = 'Adult';
		if (!someAdult && someNeo) this.sizeSelect.value = 'Neonatal';
	}

	filterIrrCheckbox() {
		const filteredProducts = products.filter(x => { return x.category === this.componentSelect.value; });
		const someIrr = filteredProducts.some(p => p.irr === true);
		const someNotIrr = filteredProducts.some(p => p.irr === false);
		this.irrCheckbox.disabled = !(someIrr && someNotIrr);
		if (someIrr && !someNotIrr) this.irrCheckbox.checked = true;
		if (!someIrr && someNotIrr) this.irrCheckbox.checked = false;
	}

	productSelectChanged() {
		//console.log("product changed");
	}


}
