var Modeler = require("../Modeler.js");
var className = 'TypeListOfForeignTaxDetailsType';

var TypeListOfForeignTaxDetailsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ForeignTaxDetails: {
      type: "TypeForeignTaxDetailsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:ForeignTaxDetails",
        type: "ForeignTaxDetailsType",
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
	  ForeignTaxDetails: {
      type: "TypeForeignTaxDetailsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:ForeignTaxDetails",
        type: "ForeignTaxDetailsType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfForeignTaxDetailsType;
Modeler.register(TypeListOfForeignTaxDetailsType, "TypeListOfForeignTaxDetailsType");
