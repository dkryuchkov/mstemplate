var Modeler = require("../Modeler.js");
var className = 'ElementCreate';

var ElementCreate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Create: {
      type: "TypeCreateType",
      wsdlDefinition: {
        name: "Create",
        type: "CreateType",
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
	  Create: {
      type: "TypeCreateType",
      wsdlDefinition: {
        name: "Create",
        type: "CreateType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreate;
Modeler.register(ElementCreate, "ElementCreate");
