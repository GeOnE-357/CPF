function dbMareas()
	{
		const db = [
			{"mes":1, "dia":19, "mareas":[{"horas":4, "minutos":18, "altura":1.53},{"horas":10, "minutos":13, "altura":7.94},{"horas":16, "minutos":37, "altura":0.91},{"horas":22, "minutos":43, "altura":7.96}]},
			{"mes":1, "dia":20, "mareas":[{"horas":4, "minutos":56, "altura":1.30},{"horas":10, "minutos":53, "altura":8.05},{"horas":17, "minutos":17, "altura":0.94},{"horas":23, "minutos":19, "altura":7.95}]},
			{"mes":1, "dia":21, "mareas":[{"horas":5, "minutos":37, "altura":1.21},{"horas":11, "minutos":36, "altura":8.01},{"horas":18, "minutos":0, "altura":1.16}]},
			{"mes":1, "dia":22, "mareas":[{"horas":0, "minutos":0, "altura":7.83},{"horas":6, "minutos":22, "altura":1.26},{"horas":12, "minutos":25, "altura":7.84},{"horas":18, "minutos":47, "altura":1.53}]},
			{"mes":1, "dia":23, "mareas":[{"horas":0, "minutos":46, "altura":7.60},{"horas":7, "minutos":11, "altura":1.45},{"horas":13, "minutos":23, "altura":7.56},{"horas":19, "minutos":40, "altura":2.00}]},
			{"mes":1, "dia":24, "mareas":[{"horas":1, "minutos":41, "altura":7.32},{"horas":8, "minutos":9, "altura":1.70},{"horas":14, "minutos":31, "altura":7.28},{"horas":20, "minutos":43, "altura":2.46}]},
			{"mes":1, "dia":25, "mareas":[{"horas":2, "minutos":47, "altura":7.06},{"horas":9, "minutos":17, "altura":1.91},{"horas":15, "minutos":49, "altura":7.13},{"horas":21, "minutos":58, "altura":2.75}]},
			{"mes":1, "dia":26, "mareas":[{"horas":4, "minutos":2, "altura":6.95},{"horas":10, "minutos":35, "altura":1.91},{"horas":17, "minutos":8, "altura":7.18},{"horas":23, "minutos":19, "altura":2.72}]},
			{"mes":1, "dia":27, "mareas":[{"horas":5, "minutos":18, "altura":7.05},{"horas":11, "minutos":51, "altura":1.65},{"horas":18, "minutos":21, "altura":7.43}]},
			{"mes":1, "dia":28, "mareas":[{"horas":0, "minutos":29, "altura":2.39},{"horas":6, "minutos":27, "altura":7.33},{"horas":12, "minutos":55, "altura":1.24},{"horas":19, "minutos":23, "altura":7.75}]},
			{"mes":2, "dia":1, "mareas":[{"horas":1, "minutos":28, "altura":1.94},{"horas":7, "minutos":28, "altura":7.67},{"horas":13, "minutos":50, "altura":0.84},{"horas":20, "minutos":16, "altura":8.05}]},
			{"mes":2, "dia":2, "mareas":[{"horas":2, "minutos":18, "altura":1.51},{"horas":8, "minutos":21, "altura":7.99},{"horas":14, "minutos":39, "altura":0.57},{"horas":21, "minutos":1, "altura":8.24}]},
			{"mes":2, "dia":3, "mareas":[{"horas":3, "minutos":4, "altura":1.19},{"horas":9, "minutos":7, "altura":8.20},{"horas":15, "minutos":24, "altura":0.48},{"horas":21, "minutos":42, "altura":8.30}]},
			{"mes":2, "dia":4, "mareas":[{"horas":3, "minutos":46, "altura":1.02},{"horas":9, "minutos":50, "altura":8.26},{"horas":16, "minutos":6, "altura":0.60},{"horas":22, "minutos":19, "altura":8.22}]},
			{"mes":2, "dia":5, "mareas":[{"horas":4, "minutos":26, "altura":1.03},{"horas":10, "minutos":31, "altura":8.15},{"horas":16, "minutos":46, "altura":0.91},{"horas":22, "minutos":54, "altura":8.01}]},
			{"mes":2, "dia":6, "mareas":[{"horas":5, "minutos":5, "altura":1.21},{"horas":11, "minutos":10, "altura":7.90},{"horas":17, "minutos":24, "altura":1.38},{"horas":23, "minutos":28, "altura":7.69}]},
			{"mes":2, "dia":7, "mareas":[{"horas":5, "minutos":43, "altura":1.53},{"horas":11, "minutos":50, "altura":7.53},{"horas":18, "minutos":2, "altura":1.96}]},
			{"mes":2, "dia":8, "mareas":[{"horas":0, "minutos":2, "altura":7.29},{"horas":6, "minutos":20, "altura":1.95},{"horas":12, "minutos":32, "altura":7.09},{"horas":18, "minutos":39, "altura":2.58}]},
			{"mes":2, "dia":9, "mareas":[{"horas":0, "minutos":39, "altura":6.86},{"horas":6, "minutos":58, "altura":2.41},{"horas":13, "minutos":19, "altura":6.64},{"horas":19, "minutos":18, "altura":3.18}]},
			{"mes":2, "dia":10, "mareas":[{"horas":1, "minutos":21, "altura":6.42},{"horas":7, "minutos":40, "altura":2.85},{"horas":14, "minutos":15, "altura":6.24},{"horas":20, "minutos":3, "altura":3.71}]},
			{"mes":2, "dia":11, "mareas":[{"horas":2, "minutos":13, "altura":6.04},{"horas":8, "minutos":32, "altura":3.22},{"horas":15, "minutos":24, "altura":5.99},{"horas":21, "minutos":8, "altura":4.10}]},
			{"mes":2, "dia":12, "mareas":[{"horas":3, "minutos":20, "altura":5.80},{"horas":9, "minutos":45, "altura":3.43},{"horas":16, "minutos":39, "altura":5.96},{"horas":22, "minutos":47, "altura":4.19}]},
			{"mes":2, "dia":13, "mareas":[{"horas":4, "minutos":34, "altura":5.77},{"horas":11, "minutos":12, "altura":3.34},{"horas":17, "minutos":46, "altura":6.15}]},
			{"mes":2, "dia":14, "mareas":[{"horas":0, "minutos":5, "altura":3.93},{"horas":5, "minutos":40, "altura":5.96},{"horas":12, "minutos":16, "altura":3.01},{"horas":18, "minutos":39, "altura":6.48}]},
			{"mes":2, "dia":15, "mareas":[{"horas":0, "minutos":53, "altura":3.50},{"horas":6, "minutos":34, "altura":6.31},{"horas":13, "minutos":1, "altura":2.56},{"horas":19, "minutos":21, "altura":6.87}]},
			{"mes":2, "dia":16, "mareas":[{"horas":1, "minutos":30, "altura":2.99},{"horas":7, "minutos":19, "altura":6.75},{"horas":13, "minutos":40, "altura":2.07},{"horas":19, "minutos":58, "altura":7.27}]},
			{"mes":2, "dia":17, "mareas":[{"horas":2, "minutos":5, "altura":2.44},{"horas":7, "minutos":58, "altura":7.21},{"horas":14, "minutos":18, "altura":1.60},{"horas":20, "minutos":31, "altura":7.63}]},
			{"mes":2, "dia":18, "mareas":[{"horas":2, "minutos":40, "altura":1.89},{"horas":8, "minutos":36, "altura":7.65},{"horas":14, "minutos":55, "altura":1.20},{"horas":21, "minutos":3, "altura":7.93}]},
			{"mes":2, "dia":19, "mareas":[{"horas":3, "minutos":16, "altura":1.39},{"horas":9, "minutos":13, "altura":8},{"horas":15, "minutos":34, "altura":0.94},{"horas":21, "minutos":36, "altura":8.13}]},
			{"mes":2, "dia":20, "mareas":[{"horas":3, "minutos":53, "altura":1.01},{"horas":9, "minutos":51, "altura":8.23},{"horas":16, "minutos":13, "altura":0.85},{"horas":22, "minutos":10, "altura":8.21}]},
			{"mes":2, "dia":21, "mareas":[{"horas":4, "minutos":33, "altura":0.78},{"horas":10, "minutos":32, "altura":8.30},{"horas":16, "minutos":55, "altura":0.96},{"horas":22, "minutos":47, "altura":8.16}]},
			{"mes":2, "dia":22, "mareas":[{"horas":5, "minutos":15, "altura":0.73},{"horas":11, "minutos":16, "altura":8.19},{"horas":17, "minutos":39, "altura":1.24},{"horas":23, "minutos":28, "altura":7.97}]},
			{"mes":2, "dia":23, "mareas":[{"horas":6, "minutos":0, "altura":0.86},{"horas":12, "minutos":7, "altura":7.94},{"horas":18, "minutos":26, "altura":1.68}]},
			{"mes":2, "dia":24, "mareas":[{"horas":0, "minutos":16, "altura":7.67},{"horas":6, "minutos":51, "altura":1.14},{"horas":13, "minutos":7, "altura":7.60},{"horas":19, "minutos":20, "altura":2.19}]},
			{"mes":2, "dia":25, "mareas":[{"horas":1, "minutos":13, "altura":7.30},{"horas":7, "minutos":49, "altura":1.49},{"horas":14, "minutos":19, "altura":7.28},{"horas":20, "minutos":25, "altura":2.65}]},
			{"mes":2, "dia":26, "mareas":[{"horas":2, "minutos":25, "altura":6.98},{"horas":8, "minutos":58, "altura":1.79},{"horas":15, "minutos":39, "altura":7.14},{"horas":21, "minutos":42, "altura":2.89}]},
			{"mes":2, "dia":27, "mareas":[{"horas":3, "minutos":46, "altura":6.86},{"horas":10, "minutos":16, "altura":1.88},{"horas":16, "minutos":58, "altura":7.23},{"horas":23, "minutos":4, "altura":2.78}]},
			{"mes":2, "dia":28, "mareas":[{"horas":5, "minutos":5, "altura":6.98},{"horas":11, "minutos":33, "altura":1.68},{"horas":18, "minutos":6, "altura":7.48}]},
			{"mes":2, "dia":29, "mareas":[{"horas":0, "minutos":14, "altura":2.37},{"horas":6, "minutos":14, "altura":7.28},{"horas":12, "minutos":37, "altura":1.35},{"horas":19, "minutos":4, "altura":7.78}]},
			{"mes":2, "dia":30, "mareas":[{"horas":1, "minutos":10, "altura":1.88},{"horas":7, "minutos":13, "altura":7.63},{"horas":13, "minutos":31, "altura":1.04},{"horas":19, "minutos":52, "altura":8.03}]},
			{"mes":2, "dia":31, "mareas":[{"horas":1, "minutos":59, "altura":1.44},{"horas":8, "minutos":3, "altura":7.92},{"horas":14, "minutos":19, "altura":0.87},{"horas":20, "minutos":34, "altura":8.17}]},
			{"mes":9, "dia":1, "mareas":[{"horas":5, "minutos":59, "altura":1.66}, {"horas":11, "minutos":45, "altura":7.71}, {"horas":18, "minutos":22, "altura":1.11}]}, {"mes":9, "dia":2, "mareas":[{"horas":0, "minutos":33, "altura":7.6}, {"horas":6, "minutos":50, "altura":2.11}, {"horas":12, "minutos":38, "altura":7.39}, {"horas":19, "minutos":17, "altura":1.41}]}, {"mes":9, "dia":3, "mareas":[{"horas":1, "minutos":41, "altura":7.28}, {"horas":7, "minutos":49, "altura":2.56}, {"horas":13, "minutos":46, "altura":7.07}, {"horas":20, "minutos":22, "altura":1.72}]}, {"mes":9, "dia":4, "mareas":[{"horas":3, "minutos":1, "altura":7.09}, {"horas":9, "minutos":1, "altura":2.86}, {"horas":15, "minutos":7, "altura":6.9}, {"horas":21, "minutos":37, "altura":1.87}]}, {"mes":9, "dia":5, "mareas":[{"horas":4, "minutos":21, "altura":7.13}, {"horas":10, "minutos":22, "altura":2.85}, {"horas":16, "minutos":28, "altura":6.98}, {"horas":22, "minutos":56, "altura":1.76}]}, {"mes":9, "dia":6, "mareas":[{"horas":5, "minutos":32, "altura":7.36}, {"horas":11, "minutos":37, "altura":2.52}, {"horas":17, "minutos":40, "altura":7.26}]}, {"mes":9, "dia":7, "mareas":[{"horas":0, "minutos":5, "altura":1.44}, {"horas":6, "minutos":32, "altura":7.67}, {"horas":12, "minutos":39, "altura":2.02}, {"horas":18, "minutos":41, "altura":7.63}]}, {"mes":9, "dia":8, "mareas":[{"horas":1, "minutos":2, "altura":1.1}, {"horas":7, "minutos":23, "altura":7.96}, {"horas":13, "minutos":31, "altura":1.52}, {"horas":19, "minutos":35, "altura":7.96}]}, {"mes":9, "dia":9, "mareas":[{"horas":1, "minutos":53, "altura":0.86}, {"horas":8, "minutos":7, "altura":8.16}, {"horas":14, "minutos":17, "altura":1.12}, {"horas":20, "minutos":22, "altura":8.17}]}, {"mes":9, "dia":10, "mareas":[{"horas":2, "minutos":38, "altura":0.78}, {"horas":8, "minutos":47, "altura":8.23}, {"horas":15, "minutos":0, "altura":0.89}, {"horas":21, "minutos":5, "altura":8.23}]}, {"mes":9, "dia":11, "mareas":[{"horas":3, "minutos":20, "altura":0.89}, {"horas":9, "minutos":24, "altura":8.17}, {"horas":15, "minutos":41, "altura":0.85}, {"horas":21, "minutos":47, "altura":8.13}]}, {"mes":9, "dia":12, "mareas":[{"horas":4, "minutos":1, "altura":1.17}, {"horas":9, "minutos":59, "altura":7.98}, {"horas":16, "minutos":20, "altura":0.98}, {"horas":22, "minutos":26, "altura":7.89}]}, {"mes":9, "dia":13, "mareas":[{"horas":4, "minutos":39, "altura":1.6}, {"horas":10, "minutos":33, "altura":7.69}, {"horas":16, "minutos":58, "altura":1.28}, {"horas":23, "minutos":7, "altura":7.53}]}, {"mes":9, "dia":14, "mareas":[{"horas":5, "minutos":17, "altura":2.12}, {"horas":11, "minutos":7, "altura":7.33}, {"horas":17, "minutos":36, "altura":1.67}, {"horas":23, "minutos":49, "altura":7.11}]}, {"mes":9, "dia":15, "mareas":[{"horas":5, "minutos":55, "altura":2.68}, {"horas":11, "minutos":43, "altura":6.91}, {"horas":18, "minutos":14, "altura":2.13}]}, {"mes":9, "dia":16, "mareas":[{"horas":0, "minutos":36, "altura":6.69}, {"horas":6, "minutos":33, "altura":3.22}, {"horas":12, "minutos":23, "altura":6.49}, {"horas":18, "minutos":54, "altura":2.57}]}, {"mes":9, "dia":17, "mareas":[{"horas":1, "minutos":32, "altura":6.32}, {"horas":7, "minutos":16, "altura":3.69}, {"horas":13, "minutos":15, "altura":6.1}, {"horas":19, "minutos":40, "altura":2.96}]}, {"mes":9, "dia":18, "mareas":[{"horas":2, "minutos":39, "altura":6.09}, {"horas":8, "minutos":11, "altura":4.04}, {"horas":14, "minutos":24, "altura":5.84}, {"horas":20, "minutos":39, "altura":3.23}]}, {"mes":9, "dia":19, "mareas":[{"horas":3, "minutos":48, "altura":6.05}, {"horas":9, "minutos":29, "altura":4.16}, {"horas":15, "minutos":39, "altura":5.78}, {"horas":21, "minutos":55, "altura":3.3}]}, {"mes":9, "dia":20, "mareas":[{"horas":4, "minutos":49, "altura":6.19}, {"horas":10, "minutos":54, "altura":3.99}, {"horas":16, "minutos":45, "altura":5.95}, {"horas":23, "minutos":8, "altura":3.11}]}, {"mes":9, "dia":21, "mareas":[{"horas":5, "minutos":40, "altura":6.46}, {"horas":11, "minutos":52, "altura":3.58}, {"horas":17, "minutos":40, "altura":6.27}]}, {"mes":9, "dia":22, "mareas":[{"horas":0, "minutos":2, "altura":2.77}, {"horas":6, "minutos":22, "altura":6.79}, {"horas":12, "minutos":35, "altura":3.07}, {"horas":18, "minutos":27, "altura":6.67}]}, {"mes":9, "dia":23, "mareas":[{"horas":0, "minutos":47, "altura":2.36}, {"horas":6, "minutos":59, "altura":7.15}, {"horas":13, "minutos":13, "altura":2.5}, {"horas":19, "minutos":9, "altura":7.11}]}, {"mes":9, "dia":24, "mareas":[{"horas":1, "minutos":27, "altura":1.96}, {"horas":7, "minutos":34, "altura":7.48}, {"horas":13, "minutos":50, "altura":1.93}, {"horas":19, "minutos":49, "altura":7.52}]}, {"mes":9, "dia":25, "mareas":[{"horas":2, "minutos":7, "altura":1.61}, {"horas":8, "minutos":8, "altura":7.78}, {"horas":14, "minutos":28, "altura":1.4}, {"horas":20, "minutos":28, "altura":7.86}]}, {"mes":9, "dia":26, "mareas":[{"horas":2, "minutos":47, "altura":1.37}, {"horas":8, "minutos":42, "altura":8.0}, {"horas":15, "minutos":8, "altura":0.98}, {"horas":21, "minutos":8, "altura":8.09}]}, {"mes":9, "dia":27, "mareas":[{"horas":3, "minutos":28, "altura":1.26}, {"horas":9, "minutos":18, "altura":8.11}, {"horas":15, "minutos":49, "altura":0.69}, {"horas":21, "minutos":51, "altura":8.17}]}, {"mes":9, "dia":28, "mareas":[{"horas":4, "minutos":11, "altura":1.3}, {"horas":9, "minutos":56, "altura":8.11}, {"horas":16, "minutos":32, "altura":0.58}, {"horas":22, "minutos":36, "altura":8.11}]}, {"mes":9, "dia":29, "mareas":[{"horas":4, "minutos":56, "altura":1.49}, {"horas":10, "minutos":39, "altura":7.99}, {"horas":17, "minutos":18, "altura":0.64}, {"horas":23, "minutos":28, "altura":7.91}]}, {"mes":9, "dia":30, "mareas":[{"horas":5, "minutos":44, "altura":1.79}, {"horas":11, "minutos":27, "altura":7.75}, {"horas":18, "minutos":8, "altura":0.86}]}, {"mes":9, "dia":31, "mareas":[{"horas":0, "minutos":27, "altura":7.65}, {"horas":6, "minutos":37, "altura":2.16}, {"horas":12, "minutos":25, "altura":7.45}, {"horas":19, "minutos":4, "altura":1.17}]},
			{"mes":10, "dia":1, "mareas":[{"horas":1, "minutos":36, "altura":7.4}, {"horas":7, "minutos":36, "altura":2.5}, {"horas":13, "minutos":35, "altura":7.18}, {"horas":20, "minutos":7, "altura":1.49}]}, {"mes":10, "dia":2, "mareas":[{"horas":2, "minutos":50, "altura":7.28}, {"horas":8, "minutos":45, "altura":2.7}, {"horas":14, "minutos":53, "altura":7.04}, {"horas":21, "minutos":17, "altura":1.71}]}, {"mes":10, "dia":3, "mareas":[{"horas":4, "minutos":0, "altura":7.3}, {"horas":10, "minutos":0, "altura":2.67}, {"horas":16, "minutos":9, "altura":7.1}, {"horas":22, "minutos":31, "altura":1.73}]}, {"mes":10, "dia":4, "mareas":[{"horas":5, "minutos":4, "altura":7.44}, {"horas":11, "minutos":12, "altura":2.38}, {"horas":17, "minutos":17, "altura":7.29}, {"horas":23, "minutos":39, "altura":1.61}]}, {"mes":10, "dia":5, "mareas":[{"horas":6, "minutos":0, "altura":7.63}, {"horas":12, "minutos":13, "altura":1.97}, {"horas":18, "minutos":17, "altura":7.53}]}, {"mes":10, "dia":6, "mareas":[{"horas":0, "minutos":37, "altura":1.45}, {"horas":6, "minutos":50, "altura":7.8}, {"horas":13, "minutos":7, "altura":1.56}, {"horas":19, "minutos":11, "altura":7.73}]}, {"mes":10, "dia":7, "mareas":[{"horas":1, "minutos":29, "altura":1.36}, {"horas":7, "minutos":35, "altura":7.9}, {"horas":13, "minutos":54, "altura":1.25}, {"horas":20, "minutos":0, "altura":7.85}]}, {"mes":10, "dia":8, "mareas":[{"horas":2, "minutos":15, "altura":1.38}, {"horas":8, "minutos":16, "altura":7.91}, {"horas":14, "minutos":38, "altura":1.08}, {"horas":20, "minutos":45, "altura":7.85}]}, {"mes":10, "dia":9, "mareas":[{"horas":2, "minutos":58, "altura":1.53}, {"horas":8, "minutos":54, "altura":7.82}, {"horas":15, "minutos":19, "altura":1.07}, {"horas":21, "minutos":28, "altura":7.73}]}, {"mes":10, "dia":10, "mareas":[{"horas":3, "minutos":39, "altura":1.79}, {"horas":9, "minutos":29, "altura":7.65}, {"horas":15, "minutos":58, "altura":1.2}, {"horas":22, "minutos":9, "altura":7.52}]}, {"mes":10, "dia":11, "mareas":[{"horas":4, "minutos":17, "altura":2.14}, {"horas":10, "minutos":4, "altura":7.41}, {"horas":16, "minutos":36, "altura":1.44}, {"horas":22, "minutos":50, "altura":7.25}]}, {"mes":10, "dia":12, "mareas":[{"horas":4, "minutos":55, "altura":2.53}, {"horas":10, "minutos":39, "altura":7.12}, {"horas":17, "minutos":13, "altura":1.75}, {"horas":23, "minutos":32, "altura":6.96}]}, {"mes":10, "dia":13, "mareas":[{"horas":5, "minutos":31, "altura":2.92}, {"horas":11, "minutos":15, "altura":6.81}, {"horas":17, "minutos":49, "altura":2.08}]}, {"mes":10, "dia":14, "mareas":[{"horas":0, "minutos":17, "altura":6.68}, {"horas":6, "minutos":8, "altura":3.28}, {"horas":11, "minutos":55, "altura":6.5}, {"horas":18, "minutos":26, "altura":2.4}]}, {"mes":10, "dia":15, "mareas":[{"horas":1, "minutos":8, "altura":6.45}, {"horas":6, "minutos":48, "altura":3.56}, {"horas":12, "minutos":43, "altura":6.23}, {"horas":19, "minutos":7, "altura":2.67}]}, {"mes":10, "dia":16, "mareas":[{"horas":2, "minutos":3, "altura":6.31}, {"horas":7, "minutos":35, "altura":3.75}, {"horas":13, "minutos":44, "altura":6.05}, {"horas":19, "minutos":56, "altura":2.88}]}, {"mes":10, "dia":17, "mareas":[{"horas":3, "minutos":0, "altura":6.29}, {"horas":8, "minutos":32, "altura":3.82}, {"horas":14, "minutos":51, "altura":6.02}, {"horas":20, "minutos":54, "altura":2.98}]}, {"mes":10, "dia":18, "mareas":[{"horas":3, "minutos":54, "altura":6.39}, {"horas":9, "minutos":38, "altura":3.7}, {"horas":15, "minutos":55, "altura":6.14}, {"horas":22, "minutos":0, "altura":2.94}]}, {"mes":10, "dia":19, "mareas":[{"horas":4, "minutos":44, "altura":6.59}, {"horas":10, "minutos":44, "altura":3.38}, {"horas":16, "minutos":52, "altura":6.4}, {"horas":23, "minutos":3, "altura":2.75}]}, {"mes":10, "dia":20, "mareas":[{"horas":5, "minutos":30, "altura":6.86}, {"horas":11, "minutos":41, "altura":2.91}, {"horas":17, "minutos":44, "altura":6.75}]}, {"mes":10, "dia":21, "mareas":[{"horas":0, "minutos":0, "altura":2.46}, {"horas":6, "minutos":12, "altura":7.16}, {"horas":12, "minutos":31, "altura":2.36}, {"horas":18, "minutos":33, "altura":7.14}]}, {"mes":10, "dia":22, "mareas":[{"horas":0, "minutos":50, "altura":2.14}, {"horas":6, "minutos":53, "altura":7.45}, {"horas":13, "minutos":17, "altura":1.79}, {"horas":19, "minutos":20, "altura":7.5}]}, {"mes":10, "dia":23, "mareas":[{"horas":1, "minutos":38, "altura":1.85}, {"horas":7, "minutos":33, "altura":7.72}, {"horas":14, "minutos":2, "altura":1.27}, {"horas":20, "minutos":6, "altura":7.8}]}, {"mes":10, "dia":24, "mareas":[{"horas":2, "minutos":24, "altura":1.63}, {"horas":8, "minutos":14, "altura":7.93}, {"horas":14, "minutos":47, "altura":0.84}, {"horas":20, "minutos":53, "altura":8.01}]}, {"mes":10, "dia":25, "mareas":[{"horas":3, "minutos":10, "altura":1.51}, {"horas":8, "minutos":56, "altura":8.06}, {"horas":15, "minutos":32, "altura":0.55}, {"horas":21, "minutos":41, "altura":8.1}]}, {"mes":10, "dia":26, "mareas":[{"horas":3, "minutos":56, "altura":1.5}, {"horas":9, "minutos":40, "altura":8.09}, {"horas":16, "minutos":19, "altura":0.41}, {"horas":22, "minutos":31, "altura":8.08}]}, {"mes":10, "dia":27, "mareas":[{"horas":4, "minutos":43, "altura":1.59}, {"horas":10, "minutos":27, "altura":8.01}, {"horas":17, "minutos":7, "altura":0.45}, {"horas":23, "minutos":25, "altura":7.96}]}, {"mes":10, "dia":28, "mareas":[{"horas":5, "minutos":32, "altura":1.77}, {"horas":11, "minutos":20, "altura":7.85}, {"horas":17, "minutos":57, "altura":0.63}]}, {"mes":10, "dia":29, "mareas":[{"horas":0, "minutos":23, "altura":7.79}, {"horas":6, "minutos":24, "altura":1.99}, {"horas":12, "minutos":19, "altura":7.63}, {"horas":18, "minutos":51, "altura":0.93}]}, {"mes":10, "dia":30, "mareas":[{"horas":1, "minutos":24, "altura":7.62}, {"horas":7, "minutos":21, "altura":2.22}, {"horas":13, "minutos":24, "altura":7.42}, {"horas":19, "minutos":49, "altura":1.28}]},
			{"mes":11, "dia":1, "mareas":[{"horas":2, "minutos":27, "altura":7.48}, {"horas":8, "minutos":23, "altura":2.39}, {"horas":14, "minutos":33, "altura":7.27}, {"horas":20, "minutos":52, "altura":1.61}]}, {"mes":11, "dia":2, "mareas":[{"horas":3, "minutos":28, "altura":7.41}, {"horas":9, "minutos":30, "altura":2.44}, {"horas":15, "minutos":41, "altura":7.2}, {"horas":22, "minutos":0, "altura":1.85}]}, {"mes":11, "dia":3, "mareas":[{"horas":4, "minutos":27, "altura":7.39}, {"horas":10, "minutos":39, "altura":2.32}, {"horas":16, "minutos":47, "altura":7.22}, {"horas":23, "minutos":8, "altura":1.97}]}, {"mes":11, "dia":4, "mareas":[{"horas":5, "minutos":23, "altura":7.42}, {"horas":11, "minutos":44, "altura":2.09}, {"horas":17, "minutos":49, "altura":7.28}]}, {"mes":11, "dia":5, "mareas":[{"horas":0, "minutos":9, "altura":2.0}, {"horas":6, "minutos":15, "altura":7.45}, {"horas":12, "minutos":41, "altura":1.82}, {"horas":18, "minutos":46, "altura":7.34}]}, {"mes":11, "dia":6, "mareas":[{"horas":1, "minutos":5, "altura":2.02}, {"horas":7, "minutos":3, "altura":7.47}, {"horas":13, "minutos":32, "altura":1.6}, {"horas":19, "minutos":40, "altura":7.39}]}, {"mes":11, "dia":7, "mareas":[{"horas":1, "minutos":54, "altura":2.08}, {"horas":7, "minutos":47, "altura":7.45}, {"horas":14, "minutos":18, "altura":1.46}, {"horas":20, "minutos":29, "altura":7.38}]}, {"mes":11, "dia":8, "mareas":[{"horas":2, "minutos":39, "altura":2.18}, {"horas":8, "minutos":28, "altura":7.39}, {"horas":15, "minutos":0, "altura":1.42}, {"horas":21, "minutos":15, "altura":7.33}]}, {"mes":11, "dia":9, "mareas":[{"horas":3, "minutos":20, "altura":2.34}, {"horas":9, "minutos":7, "altura":7.29}, {"horas":15, "minutos":40, "altura":1.48}, {"horas":21, "minutos":57, "altura":7.23}]}, {"mes":11, "dia":10, "mareas":[{"horas":3, "minutos":59, "altura":2.53}, {"horas":9, "minutos":44, "altura":7.16}, {"horas":16, "minutos":17, "altura":1.6}, {"horas":22, "minutos":37, "altura":7.11}]}, {"mes":11, "dia":11, "mareas":[{"horas":4, "minutos":35, "altura":2.73}, {"horas":10, "minutos":20, "altura":7.01}, {"horas":16, "minutos":51, "altura":1.76}, {"horas":23, "minutos":16, "altura":6.97}]}, {"mes":11, "dia":12, "mareas":[{"horas":5, "minutos":10, "altura":2.91}, {"horas":10, "minutos":56, "altura":6.85}, {"horas":17, "minutos":25, "altura":1.94}, {"horas":23, "minutos":55, "altura":6.84}]}, {"mes":11, "dia":13, "mareas":[{"horas":5, "minutos":44, "altura":3.06}, {"horas":11, "minutos":34, "altura":6.7}, {"horas":18, "minutos":0, "altura":2.11}]}, {"mes":11, "dia":14, "mareas":[{"horas":0, "minutos":36, "altura":6.73}, {"horas":6, "minutos":21, "altura":3.17}, {"horas":12, "minutos":16, "altura":6.57}, {"horas":18, "minutos":38, "altura":2.27}]}, {"mes":11, "dia":15, "mareas":[{"horas":1, "minutos":19, "altura":6.66}, {"horas":7, "minutos":1, "altura":3.22}, {"horas":13, "minutos":5, "altura":6.47}, {"horas":19, "minutos":20, "altura":2.42}]}, {"mes":11, "dia":16, "mareas":[{"horas":2, "minutos":6, "altura":6.62}, {"horas":7, "minutos":48, "altura":3.23}, {"horas":14, "minutos":2, "altura":6.43}, {"horas":20, "minutos":9, "altura":2.56}]}, {"mes":11, "dia":17, "mareas":[{"horas":2, "minutos":55, "altura":6.65}, {"horas":8, "minutos":42, "altura":3.17}, {"horas":15, "minutos":3, "altura":6.47}, {"horas":21, "minutos":6, "altura":2.67}]}, {"mes":11, "dia":18, "mareas":[{"horas":3, "minutos":46, "altura":6.73}, {"horas":9, "minutos":44, "altura":3.0}, {"horas":16, "minutos":4, "altura":6.6}, {"horas":22, "minutos":10, "altura":2.69}]}, {"mes":11, "dia":19, "mareas":[{"horas":4, "minutos":37, "altura":6.88}, {"horas":10, "minutos":49, "altura":2.69}, {"horas":17, "minutos":4, "altura":6.82}, {"horas":23, "minutos":16, "altura":2.6}]}, {"mes":11, "dia":20, "mareas":[{"horas":5, "minutos":28, "altura":7.08}, {"horas":11, "minutos":51, "altura":2.26}, {"horas":18, "minutos":2, "altura":7.1}]}, {"mes":11, "dia":21, "mareas":[{"horas":0, "minutos":18, "altura":2.41}, {"horas":6, "minutos":17, "altura":7.32}, {"horas":12, "minutos":48, "altura":1.76}, {"horas":18, "minutos":58, "altura":7.4}]}, {"mes":11, "dia":22, "mareas":[{"horas":1, "minutos":14, "altura":2.16}, {"horas":7, "minutos":7, "altura":7.56}, {"horas":13, "minutos":41, "altura":1.25}, {"horas":19, "minutos":52, "altura":7.69}]}, {"mes":11, "dia":23, "mareas":[{"horas":2, "minutos":7, "altura":1.9}, {"horas":7, "minutos":55, "altura":7.8}, {"horas":14, "minutos":31, "altura":0.8}, {"horas":20, "minutos":45, "altura":7.93}]}, {"mes":11, "dia":24, "mareas":[{"horas":2, "minutos":56, "altura":1.68}, {"horas":8, "minutos":44, "altura":7.99}, {"horas":15, "minutos":19, "altura":0.46}, {"horas":21, "minutos":36, "altura":8.09}]}, {"mes":11, "dia":25, "mareas":[{"horas":3, "minutos":44, "altura":1.54}, {"horas":9, "minutos":33, "altura":8.11}, {"horas":16, "minutos":7, "altura":0.28}, {"horas":22, "minutos":27, "altura":8.16}]}, {"mes":11, "dia":26, "mareas":[{"horas":4, "minutos":32, "altura":1.48}, {"horas":10, "minutos":23, "altura":8.14}, {"horas":16, "minutos":55, "altura":0.27}, {"horas":23, "minutos":18, "altura":8.13}]}, {"mes":11, "dia":27, "mareas":[{"horas":5, "minutos":20, "altura":1.51}, {"horas":11, "minutos":15, "altura":8.07}, {"horas":17, "minutos":44, "altura":0.44}]}, {"mes":11, "dia":28, "mareas":[{"horas":0, "minutos":9, "altura":8.02}, {"horas":6, "minutos":9, "altura":1.64}, {"horas":12, "minutos":9, "altura":7.92}, {"horas":18, "minutos":34, "altura":0.76}]}, {"mes":11, "dia":29, "mareas":[{"horas":1, "minutos":1, "altura":7.83}, {"horas":7, "minutos":0, "altura":1.83}, {"horas":13, "minutos":6, "altura":7.69}, {"horas":19, "minutos":26, "altura":1.19}]}, {"mes":11, "dia":30, "mareas":[{"horas":1, "minutos":54, "altura":7.62}, {"horas":7, "minutos":55, "altura":2.05}, {"horas":14, "minutos":7, "altura":7.44}, {"horas":20, "minutos":23, "altura":1.68}]}, {"mes":11, "dia":31, "mareas":[{"horas":2, "minutos":49, "altura":7.39}, {"horas":8, "minutos":55, "altura":2.26}, {"horas":15, "minutos":9, "altura":7.2}, {"horas":21, "minutos":25, "altura":2.14}]}
		]

		return db;
	}

//Funcion que devuelve el nombre del dia, segun el numero enviado.
function dbDia(num)
	{
		const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		return semana[num];
	}

function dbSitios()
	{
		const db = [
			{"clave":"norte", "sitio":"Costa Norte", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1zsMgskGdRRw7KyFd0tlvqmqRm8X_kcuL&ehbc=2E312F"},
			{"clave":"norte", "sitio":"Costa Norte ", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1eM9rWFIz1u_bxq6MyhEhE8cBbmS5Wn3C&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1aMmMIPxf2Ldqi3Kzd5Iub_anxrauWlqF&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=17qKk4hHmpDEGy-YzBX42enl09BFlp1ME&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1CNUUXrJYfagvRE3xZYmH947Ep41SsOhm&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1WqlxM6bQhlQiqXNZFf75gQAtkSJ7Ndas&ehbc=2E312F"}
		]

		return db;
	}

//Funcion que filtra el listado de mareas segun el mes y el dia.
function filtrarFecha(mes, dia)
	{
		let buscado;
		const db = dbMareas();
		for ( dato of db)
			{
				if(dato.mes === mes && dato.dia === dia)
					{
						buscado= definirEstado(dato.mareas);
						return buscado;
					}
			}
		return null;
	}

//Funcion que define cuales son "pleamar" y cuales "bajamar" y envia las pleamares.
function definirEstado(mareas)
	{
		
		if(mareas[0].altura < mareas[1].altura)
			{
				for(num in mareas)
					{
						if (num%2 === 0)
							{
								mareas[num].estado="bajamar";			
							}
						else
							{
								mareas[num].estado="pleamar"
							}
					}
			}
		else
			{
				for(num in mareas)
					{
						if (num%2 === 0)
							{
								mareas[num].estado="pleamar";			
							}
						else
							{
								mareas[num].estado="bajamar"
							}
					}
			}
		
		const pleamares = [];
		for(marea of mareas)
			{
				if(marea.estado==="pleamar")
					{
						pleamares.push(marea);
					}
			}
		return pleamares;
	}

//Funcion que devuelve el mapa adecuado, si se puede circular o no y en que sector.
function filtrarSitio(marea, lugar, actual)
	{
		const sitios = dbSitios();
		const circular = marea[Number(actual)].circular;
		for(sitio in sitios)
			{
				if (sitios[sitio].clave===lugar && sitios[sitio].circular===circular)
					{
						return sitios[sitio];
					}
			}
	}

//Funcion que devuelve el mapa adecuado.
function filtrarSitioPorLugar(lugar)
	{
		const sitios = dbSitios();
		for(sitio in sitios)
			{
				if (sitios[sitio].clave===lugar && sitios[sitio].circular==="Transitar")
					{
						return sitios[sitio];
					}
			}
	}