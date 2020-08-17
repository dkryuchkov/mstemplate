var Modeler = require("../Modeler.js");
var className = 'ElementResponseFilter';

var ElementResponseFilter = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResponseFilter: {
      type: "TypeResponseFilterType",
      wsdlDefinition: {
        name: "ResponseFilter",
        type: "ResponseFilterType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResponseFilter: {
      type: "TypeResponseFilterType",
      wsdlDefinition: {
        name: "ResponseFilter",
        type: "ResponseFilterType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResponseFilter;
Modeler.register(ElementResponseFilter, "ElementResponseFilter");
