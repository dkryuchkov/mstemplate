var Modeler = require("../Modeler.js");
var className = 'ElementDelete';

var ElementDelete = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Delete: {
      type: "TypeDeleteType",
      wsdlDefinition: {
        name: "Delete",
        type: "DeleteType",
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
	  Delete: {
      type: "TypeDeleteType",
      wsdlDefinition: {
        name: "Delete",
        type: "DeleteType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDelete;
Modeler.register(ElementDelete, "ElementDelete");
