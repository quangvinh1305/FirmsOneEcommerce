import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import { Settings } from '../../api/models/Setting';
export class CreateSetting implements Seed {
  public async seed(
    factory: Factory,
    connection: Connection
  ): Promise<Settings> {
    const em = connection.createEntityManager();
    const setting = new Settings();
    setting.settingsId = 1;
    setting.url = 'www.yourURL.com';
    setting.metaTagTitle = 'your title';
    setting.metaTagDescription = 'your Description';
    setting.metaTagKeyword = 'keywords';
    setting.storeName = 'your store name';
    setting.storeOwner = 'owner name';
    setting.storeAddress = 'quan 9';
    setting.zoneId = 1;
    setting.storeEmail = 'cpo@firmsone.com';
    setting.storeTelephone = '0123456789';
    setting.storeFax = 'fax number';
    setting.storeLogo = 'yourStoreLogo.jpg';
    setting.maintenanceMode = 0;
    setting.storeImage = 'storeImage.png';
    setting.invoicePrefix = 'SPU';
    setting.orderStatus = 1;
    setting.categoryProductCount = 1;
    setting.itemsPerPage = 5;
    setting.google = 'your google account';
    setting.instagram = 'instagram account';
    setting.facebook =
      'https://www.facebook.com/profile.php?id=100004587195809';
    setting.twitter = 'twitter account';
    setting.isActive = '1';
    return await em.save(setting);
  }
}
