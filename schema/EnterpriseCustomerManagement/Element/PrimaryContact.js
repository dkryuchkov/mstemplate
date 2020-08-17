var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryContact';

var ElementPrimaryContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "PrimaryContact",
        type: "ContactType",
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
	  PrimaryContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "PrimaryContact",
        type: "ContactType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryContact;
Modeler.register(ElementPrimaryContact, "ElementPrimaryContact");
