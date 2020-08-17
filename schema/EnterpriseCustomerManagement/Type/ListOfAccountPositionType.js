var Modeler = require("../Modeler.js");
var className = 'TypeListOfAccountPositionType';

var TypeListOfAccountPositionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:AccountPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AccountPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:AccountPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfAccountPositionType;
Modeler.register(TypeListOfAccountPositionType, "TypeListOfAccountPositionType");
